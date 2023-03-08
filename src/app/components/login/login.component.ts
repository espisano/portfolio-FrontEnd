import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/model/user-login';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLogged = false;
  isLogginFail = false;
  userLoggin!: UserLogin;
  userName!: string;
  password!: string;
  rols: String[] = [];
  errMsj!: string;

  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) {}

  ngOnInit(): void{
    if (this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false; 
      this.rols = this.tokenService.getAuthorities();
    }
  }
  onLogin(): void{
    this.userLoggin = new UserLogin(this.userName, this.password);
     this.authService.login(this.userLoggin).subscribe(data => {
        this.isLogged = true
        this.isLogginFail = false
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.userName);
        this.tokenService.setAuthorities(data.authorities);
        this.rols = data.authorities;
        this.router.navigate([''])
      }, err =>{
        this.isLogged = false;
        this.isLogginFail = true;
        this.errMsj = err.error.mensaje;
        console.log(this.errMsj);
        
      })
  }

}
