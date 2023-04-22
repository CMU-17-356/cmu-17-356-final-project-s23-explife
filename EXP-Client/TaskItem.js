import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
import { Rating } from 'react-native-ratings';

const TaskItem = ({ task }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(task.name);
    const [deadline, setDeadline] = useState(task.deadline);
    const [isCompleted, setIsCompleted] = useState(task.completed);
    const [rating, setRating] = useState(task.rating);

    const onDelete = (name) => {
        console.log(`Deleted ${name}`)
    };
  
    const onUpdate = (name) => {
        console.log(`Updated ${name}`)
    };

    const handleSave = () => {
        onUpdate({
            ...task,
            name,
            deadline,
            isCompleted,
            rating,
        });
        setIsEditing(false);
    };

    return (
        <View style={styles.container}>
            {!isEditing ? (
                <>
                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.content}>
                            <Text style={styles.taskName}>{task.name}</Text>
                            <Text style={styles.taskDeadline}>{task.deadline}</Text>
                            <Text style={styles.taskStatus}>{task.completed ? 'Completed' : 'Incomplete'}</Text>
                            <Rating
                                style={styles.rating}
                                imageSize={30}
                                ratingCount={5}
                                startingValue={rating}
                                readonly={true}
                            />
                        </View>
                        <View style={styles.actionButtons}>
                            <IconButton icon="pencil" onPress={() => setIsEditing(true)} />
                            <IconButton icon="delete" onPress={() => onDelete(task.name)} />
                        </View>
                    </View>
                </>
            ) : (
                <>
                    <View>
                        <TextInput
                            style={styles.input}
                            value={name}
                            onChangeText={setName}
                            placeholder="Task Name"
                        />
                        <TextInput
                            style={styles.input}
                            value={deadline}
                            onChangeText={setDeadline}
                            placeholder="Deadline"
                        />
                        <TouchableOpacity 
                            style={[styles.statusButton, isCompleted && styles.completed]}
                            onPress={() => setIsCompleted(!isCompleted)}
                        >
                            <Text style={styles.buttonText}>{isCompleted ? 'Complete' : 'Incomplete'}</Text>
                        </TouchableOpacity>
                        <Rating
                            style={styles.rating}
                            imageSize={35}
                            ratingCount={5}
                            startingValue={rating}
                            onFinishRating={setRating}
                        />
                        <Button title="Save" onPress={() => handleSave(task.name)} />
                    </View>
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    content: {
        flex: 1,
        marginRight: 16,
        marginTop: 8,
    },
    taskName: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    taskDeadline: {
        fontSize: 16,
    },
    taskStatus: {
        fontSize: 16,
    },
    rating: {
        marginTop: 8,
        marginBottom: 8,
        marginRight: 8,
    },
    input: {
        height: 40,
        margin: 8,
    },
    actionButtons: {
        flexDirection: 'row',
    },
    statusButton: {
        backgroundColor: 'grey',
        padding: 10,
        borderRadius: 5,
    },
    completed: {
        backgroundColor: 'green',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default TaskItem;
