import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  username: string;

  @Prop()
  biography: string;

  @Prop()
  location: string;

  @Prop()
  profilePicture: string;

  @Prop()
  profileHeaderPicture: string;

  @Prop()
  media: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'User' }] })
  followers: Types.ObjectId[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'User' }] })
  following: Types.ObjectId[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Tweet' }] })
  tweets: Types.ObjectId[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Tweet' }] })
  likes: Types.ObjectId[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Tweet' }] })
  bookmarks: Types.ObjectId[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Tweet' }] })
  retweets: Types.ObjectId[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Reply' }] })
  replies: Types.ObjectId[];

  @Prop({ required: true })
  dateOfBirth: string;
}

type UserDocument = HydratedDocument<User>;
const UserSchema = SchemaFactory.createForClass(User);

export { UserDocument, UserSchema };
