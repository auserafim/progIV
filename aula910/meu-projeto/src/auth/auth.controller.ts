// src/auth/auth.controller.ts
import { Controller, Post, Body, UnauthorizedException, Get, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // Rota pública para login
  @Post('login')
  async login(@Body() body) {
    const user = await this.authService.validateUser(body.email, body.password);
    if (!user) {
      throw new UnauthorizedException('Credenciais inválidas');
    }
    return this.authService.login(user);
  }

  // Rota protegida de exemplo
  @UseGuards(JwtAuthGuard)
  @Get('perfil')
  getProfile(@Request() req) {
    // req.user contém o payload decodificado do JWT
    return req.user;
  }
}