// View Passwords

javascript:(function(){var s,F,j,f,i; s = %22%22; F = document.forms; for(j=0; j<F.length; ++j) { f = F[j]; for (i=0; i<f.length; ++i) { if (f[i].type.toLowerCase() == %22password%22) s += f[i].value + %22\n%22; } } if (s) alert(%22Passwords in forms on t