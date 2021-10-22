import {memo} from "react";

const SelectLanguage = memo(({selectedLanguage, selectedLanguageHandler}) => {
    
    const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

    return (
        <ul className='languages'>
            {languages.map((language, index) =>
                <li
                    key={index}
                    style={{color: language === selectedLanguage ? '#d0021b' : '#000000'}}
                    onClick={selectedLanguageHandler}>
                    {language}
                </li>)}
        </ul>
    )
})

export default SelectLanguage;
