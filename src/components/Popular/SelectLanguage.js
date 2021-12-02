import { useDispatch, useSelector } from "react-redux";
import { appChangeLanguageAction } from "../../redux/actions/app.actions";

const SelectLanguage = () => {
    const dispatch = useDispatch()
    const { selectedLanguage } = useSelector(state => state.appReducer)
    
    const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

    const selectedLanguageHandler = (language) => {
        dispatch(appChangeLanguageAction(language))
    }

    return (
        <ul className='languages'>
            {languages.map((language, index) =>
                <li
                    key={index}
                    style={{color: language === selectedLanguage ? '#d0021b' : '#000000'}}
                    onClick={() => selectedLanguageHandler(language)}>
                    {language}
                </li>)}
        </ul>
    )
}

export default SelectLanguage;
