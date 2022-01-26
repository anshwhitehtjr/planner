import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

export const Board = ({ board }) => {
    return (
        <Droppable key={ board.title } droppableId={ board.title }>
            {
                provided => (
                    <div className='bg-slate-400 px-5 py-2 rounded-xl' ref={ provided.innerRef } { ...provided.droppableProps }>
                        <div id="boardContainer" className='flex items-center justify-between'>
                            <p className="text-2xl">{ board.title }</p>
                            <div id="bars" className='cursor-grab'>
                                <i className="fad fa-bars"></i>
                            </div>
                        </div>
                        {
                            board.cards.map((card, index) => {
                                return <CardItem key={ card.id } cardIndex={ index } card={ card } />;
                            })
                        }
                        <button className='bg-transparent transition-all w-full text-left rounded-md py-2 px-2 hover:bg-gray-300 hover:bg-opacity-40'>+ Add A Card</button>
                        { provided.placeholder }
                    </div>
                )
            }
        </Droppable>
    );
};

export const CardItem = ({ card, cardIndex }) => {
    return (
        <Draggable draggableId={ card.id } index={ cardIndex }>
            {
                provided => (
                    <div
                        className='bg-gray-200 px-5 py-3 my-2 rounded-lg drop-shadow-2xl'
                        ref={ provided.innerRef }
                        { ...provided.draggableProps }
                        { ...provided.dragHandleProps }
                    >
                        <p>{ card.desc }</p>
                    </div>
                )
            }
        </Draggable>
    );
};
