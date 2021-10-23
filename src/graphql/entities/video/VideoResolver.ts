import { Arg, Field, InputType, Mutation, Query, Resolver } from 'type-graphql';
import { Video } from './Video';
import VideoSchema from './VideoSchema';

@InputType()
class VideoInput {
  @Field()
  description: String;

  @Field()
  title: String;

  @Field()
  category: String;
}

@Resolver()
class VideoResolver {
  @Mutation(() => Video)
  async addVideo(@Arg("videoInput") videoInput: VideoInput) {
    const video = await VideoSchema.create(videoInput);
    
    return video;
  }

  @Query(() => [Video])
  async videos() {
    return VideoSchema.find();
  }
}

export { VideoResolver }