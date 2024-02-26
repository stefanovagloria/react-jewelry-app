import styles from './Profile.module.css';
import img from './../../assets/userImg.png';

const Profile = () => {

    return(
        <div className={styles.parentContainer}>
        <div className={styles.container}>
            <div>
            <img src={img} className={styles.img}/>
            </div>
            <div>
                Name
            </div>
            <div>
                Email
            </div>
            <button>Edit profile</button>
        </div>
        </div>
    )
}

export default Profile;