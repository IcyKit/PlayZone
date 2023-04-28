export class CreatePostDto {
  readonly title: string;
  readonly body: string;
  readonly attachment?: string;
  readonly authorId: string;
}
