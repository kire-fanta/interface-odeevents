export class User {
  id: number | undefined;
  username: string | undefined;
  nom: any;
  prenom: any;
  imageprofil!: File;
  notification!: Notification[]
}
export class Notification {
            id!: number
            description!: string
            date!: Date
            titre!: string
}

