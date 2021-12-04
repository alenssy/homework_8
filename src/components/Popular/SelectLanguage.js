import { useDispatch, useSelector } from "react-redux";
import { appChangeLanguageAction } from "../../redux/actions/app.actions";
import { Menu } from 'antd'

const SelectLanguage = () => {
    const dispatch = useDispatch()
    const { selectedLanguage } = useSelector(state => state.appReducer)
    
    const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

    const selectedLanguageHandler = (language) => {
        dispatch(appChangeLanguageAction(language))
    }

    return (
        <Menu mode="horizontal" className='languages' onSelect={(item, key) => console.log(item, key)}>
            {languages.map((language, index) =>
                <Menu.Item
                    key={index}
                    style={{color: language === selectedLanguage ? '#d0021b' : '#000000'}}
                    onClick={() => selectedLanguageHandler(language)}>
                    {language}
                </Menu.Item>)}
        </Menu>
    )
}

export default SelectLanguage;
