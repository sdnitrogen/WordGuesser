import { useState } from "react";
import answers from "../pages/answers.json";

export interface FormProps {
    guesses: string[];
    setGuesses: (guesses: string[]) => void;
}

const Form: React.FC<FormProps> = ({ guesses, setGuesses }: FormProps) => {
    const [guess, setGuess] = useState<string>("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (guess.length !== 5) {
            return;
        }

        if (!answers.includes(guess.toLowerCase())) {
            document.querySelector("#msg")?.classList.remove("hidden");
            return;
        }

        setGuesses([...guesses, guess.toLowerCase()]);
        setGuess("");
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGuess(event.target.value.replace(/[^a-zA-Z]/g, "").toUpperCase());
        document.querySelector("#msg")?.classList.add("hidden");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="text-center border-2 border-gray-400 p-2 m-2 text-xl"
                type="text"
                onChange={handleChange}
                minLength={5}
                maxLength={5}
                value={guess}
                placeholder="Enter your guess"
                required
            />
            <button
                className="bg-blue-500 hover:bg-blue-700 text-center text-white py-2 px-4 rounded text-xl"
                type="submit"
            >
                Submit
            </button>
            <p className="hidden text-center text-red-500" id="msg">
                Not a word in the dictionary!
            </p>
        </form>
    );
};

export default Form;
