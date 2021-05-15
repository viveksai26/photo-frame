import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { RoutePathConstant } from '../../../constants/route-path-constants';
import { AppConstants } from '../../../constants/app-constants';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-secure-header',
  templateUrl: './secure-header.component.html',
  styleUrls: ['./secure-header.component.css']
})
export class SecureHeaderComponent {}
