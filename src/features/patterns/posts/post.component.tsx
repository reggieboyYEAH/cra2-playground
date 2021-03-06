import React, { FunctionComponent, useContext } from 'react'
import { PostModel } from './duck/state';
import styles from './post.module.scss';
import Card, { CardHeader } from '../../../common/components/Card';
import Button, { ButtonKind } from '../../../common/components/Button';
import Avatar from '../../../common/components/Avatar';

type WithKey = {
    key: string
}
type Props = PostModel & WithKey;

const Post: FunctionComponent<Props> = (props: Props) => {
    return (
        <Card scaleOnHover>
            <CardHeader primaryText={props.title} avatar={<Avatar/>} subText={Math.random().toString()}/>
            <div className={styles.postWrapper}>
                <p>{props.body}</p>
                <Button kind={ButtonKind.Link} text="Comments" href={`posts/${props.id}/comments`} />
            </div>
        </Card>
    )
}

export default Post
