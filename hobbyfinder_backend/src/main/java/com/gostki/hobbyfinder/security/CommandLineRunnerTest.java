package com.gostki.hobbyfinder.security;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

import com.gostki.hobbyfinder.model.entity.Hobby;
import com.gostki.hobbyfinder.model.entity.Question;
import com.gostki.hobbyfinder.model.entity.User;
import com.gostki.hobbyfinder.repository.HobbyRepository;
import com.gostki.hobbyfinder.repository.QuestionRepository;
import com.gostki.hobbyfinder.repository.UserRepository;
import com.gostki.hobbyfinder.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
public class CommandLineRunnerTest implements CommandLineRunner {

    @Autowired
    public UserRepository userRepository;
    @Autowired
	UserService userService;

	@Autowired
	public QuestionRepository qRepository;

	@Autowired
	public HobbyRepository hRepository;


	public static final String ADMIN_LOGIN = "admin@admin.admin";
    public static final String ADMIN_NAME = "admin";
    public static final String ADMIN_PASS = "admin";

    @Override
    @Transactional
    public void run(String... args) throws Exception {

        System.out.println("if you see this, then it worked :)");
        {
	        User adminIn = userRepository.findByLogin(ADMIN_LOGIN);
	        
	        if(adminIn == null) {
	        	adminIn = new User();
	        	adminIn.setLogin(ADMIN_LOGIN);
	        	adminIn.setName(ADMIN_NAME);
	        	adminIn.setPassword(ADMIN_PASS);
	        	
	        	String adminRole = "USER";

	        	adminIn.setRoles(adminRole);
	        	
	        	userRepository.deleteAll();
	        	
	        	userService.saveUser(adminIn);
	        	
	        	System.out.println("Admin account has been created!!!");
	        	
	        }
	    }
		for(int i = 0; i < 16; i++){
			Question q = new Question(null, "TEST " + i, i % 2 == 1 ? "ZIELONY" : "CZERWONY" );
			qRepository.save(q);
		}

		String filePath = "hobby.csv";

		try {
			// Create a Scanner object to read the file
			File file = new File(filePath);
			Scanner scanner = new Scanner(file);

			// Iterate over each line of the CSV
			while (scanner.hasNextLine()) {
				String line = scanner.nextLine();
				System.out.println(line);  // Print the content of each line
				String[] data = line.split(",");

				String text ="";
				String color = "";
				for(int i = 0; i < data.length - 1;i++) {
					text += data[i];

				}
				color = data[data.length-1];

				text = text.replace("\"","");

				Hobby h = new Hobby(text,color);

				hRepository.save(h);
			}

			scanner.close();  // Close the scanner to release resources
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
    }
}