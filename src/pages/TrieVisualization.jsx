import React, { useRef, useEffect, useState } from 'react';
import Title from '../components/Title';
import Footer from '../components/Footer';
import Search from '../components/Search';
import { Trie } from '../utils/TrieDS';

const TrieVisualization = () => {
    const canvasRef = useRef(null);
    const [trie] = useState(new Trie());
    const [inputValues, setInputValues] = useState({
        delete: '',
        insert: '',
        search: '',
    });
    const radius = 20;

    const drawNode = (ctx, node, x, y, levelOffset) => {
        if (!node) return; // Return if the node is null or undefined.

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fillStyle = '#4ade80'; 
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = '#fff'; 
        ctx.font = `16px Arial`;
        ctx.fillText(node.char, x - 6, y + 4);

        const numChildren = Object.keys(node.children).length;
        if (numChildren > 0) {
            const spacing = 100; 
            let childX = x - ((numChildren - 1) * spacing) / 2;

            for (const char in node.children) {
                const child = node.children[char];
                ctx.beginPath();
                ctx.moveTo(x, y + radius);
                ctx.lineTo(childX, y + levelOffset - radius); 
                ctx.stroke();
                drawNode(ctx, child, childX, y + levelOffset, levelOffset);
                childX += spacing; 
            }
        }
    };

    const drawDottedBackground = (ctx) => {
        const dotRadius = 1.5;
        const spacing = 20;
        ctx.fillStyle = '#ddd';
        for (let x = 0; x < ctx.canvas.width; x += spacing) {
            for (let y = 0; y < ctx.canvas.height; y += spacing) {
                ctx.beginPath();
                ctx.arc(x, y, dotRadius, 0, 2 * Math.PI);
                ctx.fill();
            }
        }
    };

    const visualizeTrie = () => {
        const root = trie.getRoot();
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const depth = calculateMaxDepth(root);
        canvas.height = Math.max(600, depth * 120); 
        canvas.width = 2400; 

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawDottedBackground(ctx);
        drawNode(ctx, root, canvas.width / 2, 60, 100);
    };

    const calculateMaxDepth = (node, depth = 0) => {
        if(!node) return depth;
        let maxDepth = depth;
        for (const char in node.children) {
            const child = node.children[char];
            maxDepth = Math.max(maxDepth, calculateMaxDepth(child, depth + 1));
        }
        return maxDepth;
    };

    const handleInputChange = (e, fieldName) => {
        setInputValues({
            ...inputValues,
            [fieldName]: e.target.value,
        });
    };

    const handleInsert = () => {
        if (inputValues.insert) {
            trie.insert(inputValues.insert);
            visualizeTrie();
            setInputValues((prevValues) => ({
                ...prevValues,
                insert: '', 
            }));
        }
    };

    const handleSearch = () => {
        const found = trie.search(inputValues.search);
        alert(found ? `"${inputValues.search}" found in the trie.` : `"${inputValues.search}" not found in the trie.`);
        setInputValues((prevValues) => ({
            ...prevValues,
            search: '', 
        }));
    };

    const handleDelete = () => {
        if (inputValues.delete) {
            console.log(`Deleting: ${inputValues.delete}`); // Log the word being deleted
            trie.delete(inputValues.delete);
            console.log('Trie after deletion:', trie); // Log the Trie structure after deletion
            visualizeTrie(); // Redraw the Trie after deletion
            setInputValues((prevValues) => ({
                ...prevValues,
                delete: '', 
            }));
        }
    };

    useEffect(() => {
        visualizeTrie();
    }, [trie]);

    return (
        <>
            <div
                className="flex flex-col min-h-screen w-screen"
                style={{
                    background: `
                        linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px',
                }}
            >
                <header>
                    <Title size="text-4xl" />
                    <div className='flex justify-between ml-10 mb-4 mr-10'>
                        <Search 
                            hint="Delete a Word" 
                            text1="Delete" 
                            onClick={handleDelete} 
                            handleChange={(e) => handleInputChange(e, 'delete')} 
                            input={inputValues.delete}
                        />
                        <Search 
                            hint="Insert a Word" 
                            text1="Insert" 
                            onClick={handleInsert} 
                            handleChange={(e) => handleInputChange(e, 'insert')} 
                            input={inputValues.insert}
                        />
                        <Search 
                            hint="Search a Word" 
                            text1="Search" 
                            onClick={handleSearch} 
                            handleChange={(e) => handleInputChange(e, 'search')} 
                            input={inputValues.search}
                        />
                    </div>
                </header>
                <main className="flex container overflow-x-auto w-5/6 rounded-2xl ml-28 mt-10 mb-10 border border-black justify-center">
                    <canvas 
                        ref={canvasRef}
                        className="rounded-2xl bg-white"
                    ></canvas>
                </main>
            </div>
            <Footer />
        </>
    );
}

export default TrieVisualization;
