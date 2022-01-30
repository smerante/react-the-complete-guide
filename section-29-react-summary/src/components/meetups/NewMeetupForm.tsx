import { LegacyRef, RefObject, useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.scss';

const NewMeetupForm = () => {

    const titleInputRef: RefObject<HTMLInputElement> = useRef(null);
    const imageRef: RefObject<HTMLInputElement> = useRef(null);
    const addressRef: RefObject<HTMLInputElement> = useRef(null);
    const textareaRef: RefObject<HTMLTextAreaElement> = useRef(null);
    const submitHandler = (event: any) => {
        event.preventDefault();
        const enteredTitle = titleInputRef?.current?.value;
        const enteredImage = imageRef?.current?.value;
        const enteredAddress = addressRef?.current?.value;
        const enteredDescription = textareaRef?.current?.value;
        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        }
        console.warn(meetupData);
    };

    return <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='title'>Meetup Title</label>
                <input type="text" required id="title" ref={titleInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>Meetup Image</label>
                <input  ref={imageRef} type="url" required id="image" />
            </div>
            <div className={classes.control}>
                <label htmlFor='address'>Meetup Address</label>
                <input  ref={addressRef} type="text" required id="address" />
            </div>
            <div className={classes.control}>
                <label htmlFor='description'>Meetup Description</label>
                <textarea ref={textareaRef} rows={5} required id="description" />
            </div>
            <div className={classes.actions}>
                <button>Add meetup</button>
            </div>
        </form>
    </Card>
}

export default NewMeetupForm;