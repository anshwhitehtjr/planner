import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Board } from './Components';

export const Home = () => {
    let boardsInit = [
        {
            title: "Done",
            cards: [
                {
                    id: "firsttodo",
                    desc: "This is a Demo Todo 1"
                },
                {
                    id: "secondtodo",
                    desc: "This is a Demo Todo 2"
                },
                {
                    id: "thirdtodo",
                    desc: "This is a Demo Todo 3"
                },
                {
                    id: "fourthtodo",
                    desc: "This is a Demo Todo 4"
                },
            ]
        },
        {
            title: "Doing",
            cards: [
                {
                    id: "fifthtodo",
                    desc: "This is a Demo Todo 6"
                },
                {
                    id: "sixthtodo",
                    desc: "This is a Demo Todo 7"
                },
            ]
        },
    ];
    const [boards, setBoards] = useState(boardsInit);

    const updateCardState = result => {
        if (!result.destination) return;
        const items = Array.from(boards.map(board => {
            return board.cards.map(card => {
                return card;
            });
        }));
        const [reorderedItems] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItems);
        console.log(items);
    };

    return (
        <>
            <div className="grid grid-cols-4 gap-2">
                <DragDropContext onDragEnd={ updateCardState }>
                    {
                        boards.map(board => {
                            return <Board board={ board } key={ board.title } />;
                        })
                    }
                </DragDropContext>
            </div>
        </>
    );
};

export const About = () => {
    return (
        <h1 className="text-center text-red-700">About, World!</h1>
    );
};

