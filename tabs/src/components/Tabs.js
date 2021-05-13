import React, {useState} from 'react';
import TabsDisplay from './TabsDisplay';
import styles from './Tabs.module.css';

const Tabs = (props) => {
    // this could just as easily come from props
    const [tabs, setTabs] = useState([
        {
            label: "Tab 1",
            content: "Tab 1 content is showing here.",
            click: true,
        },
        {
            label: "Tab 2",
            content: "Tab 2 content is showing here.",
            click: false
        },
        {
            label: "Tab 3",
            content: "Tab 3 content is showing here.",
            click: false
        }
    ])

    const [selected_tab, setSelectedTab] = useState(0);

    const tabClickHandler = (e, idx) =>{
        setSelectedTab(idx);
        
    }
    return (
        <div className={styles.container}>{
            tabs.map( (tab, i) => {
                return <button className={styles.button} key={ i } onClick={ (e) => {
                    tabClickHandler(e, i, tab)
                }}>{ tab.content }</button>
            })
        }
        <hr/>
        <p><TabsDisplay theTab={tabs[selected_tab]['content']}/></p>
        
        </div>
    ); 
}


export default Tabs;