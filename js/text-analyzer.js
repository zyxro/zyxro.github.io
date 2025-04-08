function analyzeText() {
    const textInput = document.getElementById('textInput').value;

    // Calculate counts
    const letterCount = textInput.replace(/[^a-zA-Z]/g, '').length;
    const wordCount = textInput.trim().split(/\s+/).length;
    const spaceCount = (textInput.match(/\s/g) || []).length;
    const newlineCount = (textInput.match(/\n/g) || []).length;
    const specialSymbolCount = textInput.replace(/[a-zA-Z0-9\s]/g, '').length;

    // Display counts
    document.getElementById('letterCount').innerText = `Letters: ${letterCount}`;
    document.getElementById('wordCount').innerText = `Words: ${wordCount}`;
    document.getElementById('spaceCount').innerText = `Spaces: ${spaceCount}`;
    document.getElementById('newlineCount').innerText = `Newlines: ${newlineCount}`;
    document.getElementById('specialSymbolCount').innerText = `Special Symbols: ${specialSymbolCount}`;

    // Tokenization
    const pronouns = textInput.match(/\b(I|me|my|mine|you|your|yours|he|him|his|she|her|hers|it|its|we|us|our|ours|they|them|their|theirs)\b/gi) || [];
    const prepositions = textInput.match(/\b(in|on|at|to|for|with|about|against|between|into|through|during|before|after|above|below|up|down|over|under|again|further|then|once|here|there|when|where|why|how|as|if|only|but|while|of|by|about|against|among|around|at|before|after|during|for|in|into|like|near|of|off|on|over|through|to|toward|under|until|up|with)\b/gi) || [];
    const indefiniteArticles = textInput.match(/\b(a|an)\b/gi) || [];

    // Display token counts
    document.getElementById('pronounCount').innerText = `Pronouns: ${JSON.stringify(countOccurrences(pronouns))}`;
    document.getElementById('prepositionCount').innerText = `Prepositions: ${JSON.stringify(countOccurrences(prepositions))}`;
    document.getElementById('indefiniteArticleCount').innerText = `Indefinite Articles: ${JSON.stringify(countOccurrences(indefiniteArticles))}`;
}

function countOccurrences(array) {
    return array.reduce((acc, word) => {
        acc[word.toLowerCase()] = (acc[word.toLowerCase()] || 0) + 1;
        return acc;
    }, {});
}