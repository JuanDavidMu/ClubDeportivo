package co.edu.uptc.database;


import com.mongodb.client.*;
import org.bson.Document;


public class DataBase {
    private final static String URI = "mongodb+srv://juanmunoz16:Bebitolindo1.@lastproject.eljp5no.mongodb.net/?retryWrites=true&w=majority&appName=LastProject";

    public void loadDatabes(){
        MongoClient mongoClient =  MongoClients.create(URI);

        MongoDatabase database = mongoClient.getDatabase("Deporitve");

        MongoCollection afiliate = database.getCollection("Afiliados");

        FindIterable<Document> data = afiliate.find();

        for (Document doc : data){
            System.out.println(doc.toJson());
        }
    }




}
