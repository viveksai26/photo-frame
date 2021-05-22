import { environment } from 'src/environments/environment';

environment;
export class ApiUrls {
  public static verifyGIdToken = 'https://oauth2.googleapis.com/tokeninfo?id_token={idToken}';
  public static photoURL = 'https://photoslibrary.googleapis.com/v1/mediaItems';
}
