import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';

const App = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedIndices, setSelectedIndices] = useState([0]);
  const [customStyleIndex, setCustomStyleIndex] = useState(0);

  const handleSingleIndexSelect = (index) => {
    setSelectedIndex(index);
  };

  const handleMultipleIndexSelect = (index) => {
    if (selectedIndices.includes(index)) {
      setSelectedIndices(selectedIndices.filter((i) => i !== index));
    } else {
      setSelectedIndices([...selectedIndices, index]);
    }
  };

  const handleCustomIndexSelect = (index) => {
    setCustomStyleIndex(index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.headerText}>
          Simple Segmented Control with Single Selection
        </Text>
        <SegmentedControlTab
          values={['Segment One', 'Segment two']}
          selectedIndex={selectedIndex}
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          onTabPress={handleSingleIndexSelect}
        />
        <View style={styles.seperator} />

        <Text style={styles.headerText}>
          Simple Segmented Control with Single Selection + Badges
        </Text>
        <SegmentedControlTab
          badges={[12, 24]}
          values={['Segment One', 'Segment two']}
          selectedIndex={selectedIndex}
          onTabPress={handleSingleIndexSelect}
        />
        <View style={styles.seperator} />

        <Text style={styles.headerText}>
          Simple Segmented Control with Multiple Selection
        </Text>
        <SegmentedControlTab
          values={['Segment One', 'Segment two', 'Segment Three']}
          multiple
          selectedIndices={selectedIndices}
          onTabPress={handleMultipleIndexSelect}
        />
        <View style={styles.seperator} />
        <Text style={styles.headerText}>
          Custom segmented control with custom styles
        </Text>

        <SegmentedControlTab
          values={['one', 'two']}
          selectedIndex={customStyleIndex}
          onTabPress={handleCustomIndexSelect}
          borderRadius={0}
          tabsContainerStyle={{
            height: 50,
            backgroundColor: '#F2F2F2'
          }}
          tabStyle={{
            backgroundColor: '#F2F2F2',
            borderWidth: 0,
            borderColor: 'transparent',
          }}
          activeTabStyle={{ backgroundColor: 'white', marginTop: 2 }}
          tabTextStyle={{ color: '#444444', fontWeight: 'bold' }}
          activeTabTextStyle={{ color: '#888888' }}
        />
        {customStyleIndex === 0 && (
          <Text style={styles.tabContent}> Tab one</Text>
        )}
        {customStyleIndex === 1 && (
          <Text style={styles.tabContent}> Tab two</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
  },
  headerText: {
    padding: 8,
    fontSize: 14,
    color: '#444444',
    textAlign: 'center',
  },
  tabContent: {
    color: '#444444',
    fontSize: 18,
    margin: 24,
  },
  seperator: {
    marginHorizontal: -10,
    alignSelf: 'stretch',
    borderTopWidth: 1,
    borderTopColor: '#888888',
    marginTop: 24,
  },
  tabStyle: {
    borderColor: '#D52C43',
  },
  activeTabStyle: {
    backgroundColor: '#D52C43',
  },
});
