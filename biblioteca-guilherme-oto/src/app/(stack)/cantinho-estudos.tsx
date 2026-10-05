import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const FOCUS_SECONDS = 25 * 60;
const BREAK_SECONDS = 5 * 60;
type TimerMode = "focus" | "break";

export default function CantinhoEstudos() {
    const [secondsLeft, setSecondsLeft] = useState(FOCUS_SECONDS);
    const [mode, setMode] = useState<TimerMode>("focus");
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) {
            return;
        }

        const timer = setInterval(() => {
            setSecondsLeft((currentSeconds) => Math.max(currentSeconds - 1, 0));
        }, 1000);

        return () => clearInterval(timer);
    }, [isPaused]);

    useEffect(() => {
        if (secondsLeft !== 0) {
            return;
        }

        const nextMode: TimerMode = mode === "focus" ? "break" : "focus";
        setMode(nextMode);
        setSecondsLeft(nextMode === "focus" ? FOCUS_SECONDS : BREAK_SECONDS);
    }, [secondsLeft]);

    const minutes = Math.floor(secondsLeft / 60)
        .toString()
        .padStart(2, "0");
    const seconds = (secondsLeft % 60).toString().padStart(2, "0");

    function restartTimer() {
        setMode("focus");
        setSecondsLeft(FOCUS_SECONDS);
        setIsPaused(false);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.eyebrow}>FOCO E ESTUDO</Text>
                <Text style={styles.title}>Cantinho de estudos</Text>
                <Text style={styles.subtitle}>
                    Alterne entre foco e descanso para estudar melhor.
                </Text>
            </View>

            <View style={styles.timerCard}>
                <Text style={styles.mode}>
                    {mode === "focus" ? "FOCO" : "PAUSA"}
                </Text>
                <Text style={styles.timer}>
                    {minutes}:{seconds}
                </Text>
                <Text style={styles.status}>
                    {isPaused
                        ? "Cronômetro pausado"
                        : mode === "focus"
                            ? "Hora de focar"
                            : "Descanse um pouco"}
                </Text>

                <View style={styles.actions}>
                    <Pressable
                        accessibilityRole="button"
                        onPress={() => setIsPaused((current) => !current)}
                        style={[styles.button, styles.primaryButton]}
                    >
                        <Text style={styles.primaryButtonText}>
                            {isPaused ? "Continuar" : "Pausar"}
                        </Text>
                    </Pressable>
                    <Pressable
                        accessibilityRole="button"
                        onPress={restartTimer}
                        style={[styles.button, styles.secondaryButton]}
                    >
                        <Text style={styles.secondaryButtonText}>Reiniciar</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4F7FB",
        padding: 24,
    },
    header: {
        marginTop: 28,
        marginBottom: 32,
    },
    eyebrow: {
        color: "#0F766E",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 1,
        marginBottom: 8,
    },
    title: {
        color: "#102A43",
        fontSize: 30,
        fontWeight: "800",
        marginBottom: 8,
    },
    subtitle: {
        color: "#627D98",
        fontSize: 15,
        lineHeight: 22,
    },
    timerCard: {
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderColor: "#D9E2EC",
        borderRadius: 16,
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 36,
        shadowColor: "#102A43",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.08,
        shadowRadius: 12,
        elevation: 3,
    },
    mode: {
        color: "#F08A5D",
        fontSize: 13,
        fontWeight: "800",
        letterSpacing: 2,
    },
    timer: {
        color: "#102A43",
        fontSize: 64,
        fontWeight: "800",
        marginVertical: 12,
    },
    status: {
        color: "#627D98",
        fontSize: 15,
        marginBottom: 28,
    },
    actions: {
        flexDirection: "row",
        gap: 10,
        width: "100%",
    },
    button: {
        alignItems: "center",
        borderRadius: 8,
        flex: 1,
        paddingVertical: 14,
    },
    primaryButton: {
        backgroundColor: "#0F766E",
    },
    primaryButtonText: {
        color: "#FFFFFF",
        fontSize: 15,
        fontWeight: "700",
    },
    secondaryButton: {
        backgroundColor: "#E6FFFA",
        borderColor: "#99D5CE",
        borderWidth: 1,
    },
    secondaryButtonText: {
        color: "#0F766E",
        fontSize: 15,
        fontWeight: "700",
    },
});
