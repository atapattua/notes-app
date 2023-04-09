import styles from "../styles/Home.module.css";

import { useMemo, useState } from "react";

export default function NoteItem(props: any){

    const title = useMemo(() => {
        if(props.props.title.length < 12){
            return props.props.title;
        }else{
            return props.props.title.substring(0, 9) + "...";
        }
    }, [props.props.title])

    return(
        <div className={styles.notes_item_container}>
            <div className="w-25 mr-5">
                <h3>{title}</h3>
            </div>
            <div className="w-50">
                <h3>Test</h3>
            </div>
        </div>
    )
}