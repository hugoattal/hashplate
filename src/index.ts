import {getSeedFromString, splitMix32} from "@/prng.ts";
import {emojiDictionary} from "@/dictionaries.ts";

export function hashplate(value: string) {
    const seed = getSeedFromString(value);
    const random = splitMix32(seed);

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    return [
        emojiDictionary[Math.floor(random() * emojiDictionary.length)],
        [
            `${ alphabet[Math.floor(random() * alphabet.length)] }${ alphabet[Math.floor(random() * alphabet.length)] }`,
            `${ Math.floor(random() * 10) }${ Math.floor(random() * 10) }${ Math.floor(random() * 10) }`,
            `${ alphabet[Math.floor(random() * alphabet.length)] }${ alphabet[Math.floor(random() * alphabet.length)] }`
        ].join("-"),
        emojiDictionary[Math.floor(random() * emojiDictionary.length)]
    ].join(" ");
}
