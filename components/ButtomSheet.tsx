import React, { useCallback, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

export const DownloadPicture = ({onClose}: {
    onClose: () => void;
}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  // Handle changes in BottomSheet
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  // Define snap points for BottomSheet

  return (
    <View style={styles.container}>
      <BottomSheet
      onClose={onClose}
        ref={bottomSheetRef}
        snapPoints={["99%"]}
        onChange={handleSheetChanges}
        enablePanDownToClose={true}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text>Asowmdf</Text>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
       flex: 1,
       alignItems: "center",
  },
});
