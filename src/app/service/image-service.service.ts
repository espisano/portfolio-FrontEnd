import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string = "";

  constructor() { }

  public uploadImage($event: any){
    const file = $event.target.files[0]
    console.log(file);
  }
}

 
  /* 


}
}
  
  
  
  public uploadImage($event: any, name: string){
    const file = $event.target.files[0]
    const imgRef = ref(this.storage, `image/` + name)
    uploadBytes(imgRef, file)
    .then(response => {this.getImages()})
    .catch(error => console.log(error))
  }

  getImages(){
    const imagesRef = ref(this.storage, 'image')
    list(imagesRef)
    .then(async response => {
      for(let item of response.items){
        this.url = await getDownloadURL(item);
      }
    })
    .catch(error => console.log(error))
  }
}
 */