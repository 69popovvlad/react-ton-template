import { useEffect, useState, useCallback, useRef } from "react";
import { useTonClient } from "./useTonClient";

const updateDelay = Number(import.meta.env.VITE_WEB_UPDATE_DELAY ?? 3 * 1000);

export type OnReceivedHandler<T> = (data: T) => void;
export type OnErrorHandler = (error: unknown) => void;

export function useDataFetcher<T>(
    fetchData: () => Promise<T>,
    onReceived?: OnReceivedHandler<T>,
    onError?: OnErrorHandler,
    delay: number = updateDelay
) {
    const { client } = useTonClient();
    const [isStopped, setIsStopped] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const intervalIdRef = useRef<number | null>(null);
    const isInitializedRef = useRef<boolean>(false);

    const fetchAndHandleData = useCallback(async () => {
        if (isLoading) return; // Prevent multiple concurrent calls

        setIsLoading(true);

        if (!client || isStopped) {
            setIsLoading(false);
            return;
        }

        try {
            const data = await fetchData();
            if (onReceived) onReceived(data);
        } catch (error) {
            if (onError) onError(error);
        } finally {
            setIsLoading(false);
        }
    }, [client, fetchData, onReceived, onError, isStopped, isLoading]);

    // Initial fetch when component mounts
    useEffect(() => {
        if (isInitializedRef.current || !client || isStopped) {
            return;
        }

        isInitializedRef.current = true;

        fetchAndHandleData();
    }, [client, isStopped, fetchAndHandleData]);

    // Setup interval for periodic fetches
    useEffect(() => {
        if (!client || isStopped) {
            return;
        }

        if (intervalIdRef.current !== null) {
            clearInterval(intervalIdRef.current);
        }

        intervalIdRef.current = window.setInterval(fetchAndHandleData, delay);

        return () => {
            if (intervalIdRef.current !== null) {
                clearInterval(intervalIdRef.current);
            }
        };
    }, [client, isStopped, fetchAndHandleData, delay]);

    return { isStopped, setIsStopped, isLoading };
}
