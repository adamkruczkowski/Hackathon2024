package com.gostki.hobbyfinder.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;


@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {
	
	@Autowired
	private CustomUserDetailsService userDetailsService;

    @Value("${frontend.url}")
    private String frontendURL;

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Value("${frontend.port}")
    private String frontendPort;


    public CustomFilter getCustomFilter() throws Exception {
        CustomFilter filter= new CustomFilter ("/user", "GET");
        filter.setAuthenticationFailureHandler((request, response, exception) -> {

            System.out.println("-------------------------------e");
            System.out.println(request.getParameter("url"));
            System.out.println("-------------------------------e");

            System.out.println("forwarding e");


            //RequestDispatcher dd=request.getRequestDispatcher("/login?url="+request.getParameter("url"));

            //dd.forward(request, response);

            response.sendRedirect("/login?url="+request.getParameter("url"));
            //System.out.println("error");
        });
        return filter;
    }
/*

    @Bean
    public WebSecurityCustomizer webSecurityCustomizer() {
        return (web) -> web.ignoring().requestMatchers(new AntPathRequestMatcher("/h2-console/**"));
    }
*/

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http
                .authorizeHttpRequests(authorizeHttpRequests -> authorizeHttpRequests
                        .requestMatchers("/h2-console/**").permitAll()
                		.requestMatchers("/logout").permitAll()
                		// TODO testing, later for delete
                		//.requestMatchers("/api/**").permitAll()
                		//.requestMatchers("/error").permitAll()
                   		//.requestMatchers("/not_auth").permitAll()
                        .anyRequest().authenticated()

                )
                		
                .formLogin(
                        form -> form
                        
                        .loginPage("/login")
                        .permitAll()
                        .loginProcessingUrl("/login")
                        .permitAll()
                        .defaultSuccessUrl(frontendURL+ ":5174", true)
                       
                ).logout(
                    logout -> logout
                        .logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
                        .logoutSuccessUrl("/home")
                        .permitAll()
                )
                
            
                .cors(t -> t.configurationSource(corsConfiguration()))
                
                //.csrf(AbstractHttpConfigurer::disable)
                
                .csrf((csrf) -> csrf.disable())
                .build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    CorsConfigurationSource corsConfiguration(){
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(List.of(frontendURL, "http://192.168.100.109:5174", "http://localhost:5174", "http://localhost:3000"));
        configuration.addAllowedHeader("*");
        configuration.addAllowedMethod("*");
        configuration.setAllowCredentials(true);
        UrlBasedCorsConfigurationSource urlBasedCorsConfigurationSource = new UrlBasedCorsConfigurationSource();
        urlBasedCorsConfigurationSource.registerCorsConfiguration("/**", configuration);
        return urlBasedCorsConfigurationSource;
    }
}