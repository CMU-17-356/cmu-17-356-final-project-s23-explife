import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';
import ProgressCircle from 'react-native-progress/Circle';

const ArchivedDay = ({ tasks }) => {
    const [completedCount, setCompletedCount] = useState(0); // TODO: Need to actually update the completed count

    const renderTask = ({ item }) => (
        <View style={styles.task}>
            <CheckBox checked={item.completed} disabled={item.completed} />
            <View style={styles.taskDetails}>
                <Text style={styles.taskName}>{item.name}</Text>
                <Text>{item.deadline}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.progressContainer}>
                <ProgressCircle
                    size={80}
                    progress={completedCount / tasks.length}
                    showsText={true}
                    formatText={() => `${Math.round((completedCount / tasks.length) * 100)}%`}
                    style={styles.progressCircle}
                >
                    <Text style={styles.progressText}>April 1, 2023</Text>
                </ProgressCircle>
                <View>
                    <Text style={styles.summaryText}>{`On this day you...`}</Text>
                    <Text style={styles.summaryText}>{`Completed ${completedCount} out of ${tasks.length} tasks`}</Text>
                </View>
            </View>
            <FlatList
                data={tasks}
                renderItem={renderTask}
                keyExtractor={(task, index) => index.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 20,
    },
    task: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    taskDetails: {
        marginLeft: 10,
    },
    taskName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    progressContainer: {
        alignItems: 'center',
        marginVertical: 10,
        flexDirection: 'row',
    },
    progressText: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    progressCircle: {
        margin: 16,
    },
    summaryText: {
        marginTop: 5,
    },
});

export default ArchivedDay;
