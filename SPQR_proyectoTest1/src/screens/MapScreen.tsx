import { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import MapView from "react-native-maps";
import * as Location from "expo-location";

export default function MapScreen() {
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [mapReady, setMapReady] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                setErrorMsg("Se necesita permiso de ubicacion para mostrar el mapa.");
                setLoading(false);
                return;
            }

            try {
                const loc = await Location.getCurrentPositionAsync({});
                setLocation(loc);
            } catch {
                setErrorMsg("No se pudo obtener la ubicacion del dispositivo.");
            }
            setLoading(false);
        })();
    }, []);

    if (loading) {
        return (
            <View style={styles.centerContainer}>
                <ActivityIndicator size="large" color="#3b82f6" />
                <Text style={styles.loadingText}>Cargando mapa...</Text>
            </View>
        );
    }

    if (errorMsg) {
        return (
            <View style={styles.centerContainer}>
                <MaterialIcons name="location-off" size={64} color="#9ca3af" />
                <Text style={styles.errorTitle}>Ubicacion no disponible</Text>
                <Text style={styles.errorText}>{errorMsg}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {!mapReady && (
                <View style={styles.fallbackOverlay}>
                    <MaterialIcons name="map" size={64} color="#9ca3af" />
                    <Text style={styles.fallbackTitle}>Mapa no disponible</Text>
                    <Text style={styles.fallbackText}>
                        Aun no se provee un mapa para mostrar, favor configurar uno.
                    </Text>
                </View>
            )}
            <MapView
                style={styles.map}
                showsUserLocation={true}
                showsMyLocationButton={true}
                onMapReady={() => setMapReady(true)}
                initialRegion={{
                    latitude: location?.coords.latitude ?? 19.4326,
                    longitude: location?.coords.longitude ?? -99.1332,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04,
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: "100%",
        height: "100%",
    },
    centerContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f9fafb",
        paddingHorizontal: 30,
    },
    loadingText: {
        marginTop: 12,
        fontSize: 16,
        color: "#6b7280",
    },
    errorTitle: {
        marginTop: 16,
        fontSize: 20,
        fontWeight: "600",
        color: "#374151",
    },
    errorText: {
        marginTop: 8,
        fontSize: 14,
        color: "#6b7280",
        textAlign: "center",
    },
    fallbackOverlay: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f9fafb",
        paddingHorizontal: 30,
    },
    fallbackTitle: {
        marginTop: 16,
        fontSize: 20,
        fontWeight: "600",
        color: "#374151",
    },
    fallbackText: {
        marginTop: 8,
        fontSize: 14,
        color: "#6b7280",
        textAlign: "center",
    },
});
