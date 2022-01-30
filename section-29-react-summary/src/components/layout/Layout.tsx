import classes from './Layout.module.scss';
import MainNavigation from './MainNavigation';

const Layout = (props: any) => {
    return <div>
        <MainNavigation/>
        <main className={classes.main}>
            {props.children}
        </main>
    </div>
}

export default Layout;