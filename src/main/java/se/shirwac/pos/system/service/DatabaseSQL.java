package se.shirwac.pos.system.service;

import org.apache.ibatis.jdbc.ScriptRunner;
import org.springframework.stereotype.Service;
import se.shirwac.pos.system.models.Dish;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.Reader;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;


//Skapat en färdig database man kan leka med, generarat datan från mocakaroGenerator
@Service
public class DatabaseSQL {
    private final String url = "jdbc:mysql://bd0ba75b95a026:11b45746@us-cdbr-east-05.cleardb.net/heroku_7ecda9646311fe3?";
    private final String user = "bd0ba75b95a026";
    private final String password = "11b45746";


    public Connection connect() throws SQLException {
        return DriverManager.getConnection(url,user,password);
    }


    public void insert() throws SQLException, FileNotFoundException {
        Connection con = connect();
        ScriptRunner sr = new ScriptRunner(con);
        Reader reader = new BufferedReader(new FileReader("ScriptSQL/dish.sql"));
        sr.runScript(reader);
    }
}
