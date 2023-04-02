import Card from '@mui/material/Card'
import styles from '@/styles/Home.module.css'
import CardHeader from '@mui/material/CardHeader';
import AddIcon from '@mui/icons-material/Add';

export default function SideMenu(){

    const handleAddNote: any = (target: string) => {
        console.log(target);
    }

    return(
        <Card className={styles.sidemenu} elevation={3}>
            <CardHeader
                title="My Notes"
                action={
                    <AddIcon onClick={handleAddNote}/>
                }
            />
        </Card>
    );
}