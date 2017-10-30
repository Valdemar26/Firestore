import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Post {
  title: string;
  content: string;
}

interface PostId extends Post {
  id: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  postsCollection: AngularFirestoreCollection<Post>;
  posts: any;

  title: string;
  content: string;

  postDoc: AngularFirestoreDocument<Post>;
  post: Observable<Post>;

  constructor(private afs: AngularFirestore) {

  }

  ngOnInit() {
    this.postsCollection = this.afs.collection('posts');
    // this.posts = this.postsCollection.valueChanges();
    this.posts = this.postsCollection.snapshotChanges()
        .map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Post;
            const id = a.payload.doc.id;
            console.log(a);
            return { id, data };
          })
        });
  }

  addPost() {
    // this.afs.collection('posts').add({'title': this.title, 'content': this.content});
    this.afs.collection('posts').doc('my-custom-id').set({'title': this.title, 'content': this.content});
    this.title = '';
    this.content = '';
  }

  getPost(postId) {
    this.postDoc = this.afs.doc('posts/' + postId);
    this.post = this.postDoc.valueChanges();
  }

  deletePost(postId) {
    this.afs.doc('posts/' + postId).delete();
  }

}
