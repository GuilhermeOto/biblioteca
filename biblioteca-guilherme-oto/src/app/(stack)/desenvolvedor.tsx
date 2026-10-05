import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function Desenvolvedor() {
    return (
        <View style={styles.scroll}>
            <View style={styles.formaTopo} />
            <View style={styles.formaBaixo} />

            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.titulo}>Sobre o desenvolvedor</Text>

                <View style={styles.card}>
                <View style={styles.avatar}>
                    <Text style={styles.avatarTexto}>GO</Text>
                </View>

                <Text style={styles.nome}>Guilherme Oto</Text>
                <Text style={styles.cargo}>Desenvolvedor Mobile</Text>

                <View style={styles.divisor} />

                <View style={styles.secao}>
                    <Text style={styles.secaoTitulo}>Sobre</Text>
                    <Text style={styles.descricao}>
                        Teste.
                    </Text>
                </View>

                <View style={styles.secao}>
                    <Text style={styles.secaoTitulo}>Formação</Text>
                    <View style={styles.itemLinha}>
                        <View style={styles.marcador} />
                        <Text style={styles.itemTexto}>
                            FATEC Votorantim — Desenvolvimento Multiplataformas
                        </Text>
                    </View>
                </View>

                <View style={styles.secao}>
                    <Text style={styles.secaoTitulo}>Habilidades</Text>
                    <View style={styles.tagsContainer}>
                        <View style={styles.tag}>
                            <Text style={styles.tagTexto}>React Native</Text>
                        </View>
                        <View style={styles.tag}>
                            <Text style={styles.tagTexto}>TypeScript</Text>
                        </View>
                        <View style={styles.tag}>
                            <Text style={styles.tagTexto}>Expo</Text>
                        </View>
                        <View style={styles.tag}>
                            <Text style={styles.tagTexto}>JavaScript</Text>
                        </View>
                        <View style={styles.tag}>
                            <Text style={styles.tagTexto}>Git</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.secao}>
                    <Text style={styles.secaoTitulo}>Sobre o projeto</Text>
                    <Text style={styles.descricao}>
                        Uma biblioteca digital criada para organizar acervo, reservas e recomendações
                        de livros em uma experiência prática e acolhedora.
                    </Text>
                </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    scroll: {
        flex: 1,
        backgroundColor: "#102A43",
    },
    formaTopo: {
        position: "absolute",
        top: -80,
        right: -60,
        width: 220,
        height: 220,
        borderRadius: 110,
        backgroundColor: "#2CB1A6",
        opacity: 0.35,
    },
    formaBaixo: {
        position: "absolute",
        bottom: -100,
        left: -80,
        width: 260,
        height: 260,
        borderRadius: 130,
        backgroundColor: "#F08A5D",
        opacity: 0.25,
    },
    container: {
        padding: 20,
        alignItems: "center",
    },
    titulo: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 24,
        color: "#FFFFFF",
    },
    card: {
        width: "100%",
        maxWidth: 400,
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        padding: 24,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        borderWidth: 1,
        borderColor: "#E6EEF5",
        marginBottom: 24,
    },
    avatar: {
        width: 72,
        height: 72,
        borderRadius: 36,
        backgroundColor: "#0F766E",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 16,
    },
    avatarTexto: {
        color: "#FFFFFF",
        fontSize: 24,
        fontWeight: "bold",
    },
    nome: {
        fontSize: 18,
        fontWeight: "700",
        color: "#102A43",
        textAlign: "center",
    },
    cargo: {
        fontSize: 14,
        color: "#0F766E",
        fontWeight: "600",
        marginTop: 4,
    },
    divisor: {
        width: "100%",
        height: 1,
        backgroundColor: "#D9E2EC",
        marginVertical: 20,
    },
    secao: {
        width: "100%",
        marginBottom: 20,
    },
    secaoTitulo: {
        fontSize: 15,
        fontWeight: "700",
        color: "#102A43",
        marginBottom: 8,
    },
    descricao: {
        fontSize: 14,
        color: "#666",
        lineHeight: 20,
    },
    itemLinha: {
        flexDirection: "row",
        alignItems: "flex-start",
    },
    marcador: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: "#F08A5D",
        marginTop: 6,
        marginRight: 8,
    },
    itemTexto: {
        flex: 1,
        fontSize: 14,
        color: "#666",
        lineHeight: 20,
    },
    tagsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
    },
    tag: {
        backgroundColor: "#E6FFFA",
        borderRadius: 8,
        paddingVertical: 6,
        paddingHorizontal: 14,
    },
    tagTexto: {
        fontSize: 13,
        color: "#0F766E",
        fontWeight: "600",
    },
});
