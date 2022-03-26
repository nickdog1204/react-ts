import React, {useEffect, useState} from "react";
import axios from "axios";

interface IConvertProps {
    targetLanguage: string;
    textToTranslate: string;
}

const Convert: React.FC<IConvertProps> = ({targetLanguage, textToTranslate}) => {
    const [translatedText, setTranslatedText] = useState<string>('');
    const [debouncedTextToTranslate, setDebouncedTextToTranslate] = useState<string>(textToTranslate);
    const [debouncedTargetLanguage, setDebouncedTargetLanguage] = useState<string>('af');
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTextToTranslate(textToTranslate)
        }, 1000);

        return () => {
            clearTimeout(timerId)
        }

    }, [textToTranslate]);
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTargetLanguage(targetLanguage)
        }, 3000);

        return () => {
            clearTimeout(timerId)
        }

    }, [targetLanguage]);
    useEffect(() => {
        const doTranslationAsync = async () => {
            const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: debouncedTextToTranslate,
                    target: debouncedTargetLanguage,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'

                }
            });
            setTranslatedText(data.data.translations[0].translatedText);
        };
        doTranslationAsync();
    }, [debouncedTargetLanguage, debouncedTextToTranslate]);

    return (
        <h3 style={{color: 'red'}} className="ui header">{translatedText}</h3>
    );
}
export default Convert;