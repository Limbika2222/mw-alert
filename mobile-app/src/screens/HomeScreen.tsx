import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.appTitle}>MW-Alert</Text>

        <View style={styles.card}>
          <View style={styles.locationRow}>
            <View style={styles.greenDot} />
            <Text style={styles.locationText}>
              Zomba District
            </Text>
          </View>

          <Text style={styles.statusText}>
            Safe
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.temperature}>
            28°C
          </Text>

          <Text style={styles.weatherText}>
            Mostly Cloudy
          </Text>

          <Text style={styles.weatherText}>
            50% Chance of Rain
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>
            Today's Advisory
          </Text>

          <Text>
            Rain expected later this afternoon.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>
            Latest Alert
          </Text>

          <Text>
            No active disaster alerts.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>
            Family Member At Risk
          </Text>

          <Text>Mother</Text>
          <Text>Nsanje District</Text>

          <Text style={styles.riskText}>
            High Flood Risk
          </Text>

          <TouchableOpacity style={styles.notifyButton}>
            <Text style={styles.notifyText}>
              Notify
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.floatingButton}>
        <Text style={styles.phoneIcon}>
          📞
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },

  content: {
    padding: 16,
    paddingBottom: 100,
  },

  appTitle: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },

  locationRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  greenDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#22C55E",
    marginRight: 10,
  },

  locationText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#22C55E",
  },

  statusText: {
    marginTop: 8,
    color: "#6B7280",
  },

  temperature: {
    fontSize: 34,
    fontWeight: "700",
  },

  weatherText: {
    marginTop: 4,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
  },

  riskText: {
    color: "#DC2626",
    marginTop: 8,
    marginBottom: 12,
  },

  notifyButton: {
    backgroundColor: "#2563EB",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },

  notifyText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },

  floatingButton: {
    position: "absolute",
    bottom: 24,
    right: 24,
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#DC2626",
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
  },

  phoneIcon: {
    fontSize: 28,
  },
});