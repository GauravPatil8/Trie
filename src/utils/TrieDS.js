class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false; 
        this.char = ''; 
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode(); 
    }

    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
                node.children[char].char = char; 
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                return false; 
            }
            node = node.children[char];
        }
        return node.isEndOfWord; 
    }

    delete(word) {
        const deleteHelper = (node, word, depth) => {
            if (!node) {
                return null; 
            }

            // Check if we've reached the end of the word
            if (depth === word.length) {
                if (node.isEndOfWord) {
                    node.isEndOfWord = false; // Unmark the end of the word
                }
                // If there are no children, remove this node
                return Object.keys(node.children).length === 0 ? null : node;
            }

            const char = word[depth];
            // Continue deleting in the child node
            node.children[char] = deleteHelper(node.children[char], word, depth + 1);

            // If this node has no children and is not the end of another word, remove it
            return Object.keys(node.children).length === 0 && !node.isEndOfWord ? null : node;
        };

        // Start the deletion process
        this.root = deleteHelper(this.root, word, 0);
    }

    getRoot() {
        return this.root;
    }
}

export { Trie };
