const Description: React.FC = () => {
    return (
        <div className="text-center my-4 mx-4">
            <h1 className="text-4xl font-bold">WordGuesser</h1>
            <p className="italic">Practice your Word guessing power.</p>
            <ul className="md:block text-left list-disc mt-4">
                <li>The game consists of only 5 letter words.</li>
                <li>Guess the word by typing it in the input box below.</li>
                <li>You have 6 guesses.</li>
                <li>
                    If a letter is in the correct location, it will be{" "}
                    <span className="text-green-500 font-bold">GREEN</span>
                </li>
                <li>
                    If a letter is in the word but in the wrong location, it
                    will be{" "}
                    <span className="text-yellow-500 font-bold">YELLOW</span>
                </li>
                <li>
                    If a letter is not in the word, it will be{" "}
                    <span className="text-gray-500 font-bold">GRAY</span>
                </li>
            </ul>
        </div>
    );
};

export default Description;
