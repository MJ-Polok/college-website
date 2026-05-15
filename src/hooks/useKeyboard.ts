// src/useKeyboard.ts
import { useEffect } from "react";

export const useKeyboard = (keyMap: Record<string, () => void>, enabled: boolean) => {
    useEffect(() => {
        if (!enabled) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            const action = keyMap[event.key];
            if (action) {
                // Default behavior (jemon page scroll) bondho korar jonno nichei line-ti thakte pare
                if (["ArrowRight", "ArrowLeft", "Escape"].includes(event.key)) {
                    event.preventDefault();
                }
                action();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        
        // Clean up: jeno memory leak na hoy
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [keyMap, enabled]);
};