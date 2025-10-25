package com.example.nightreignboard.controller;

import com.example.nightreignboard.model.Post;
import com.example.nightreignboard.repo.PostRepo;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/posts")
public class PostController {
    
    @Autowired
    private PostRepo postRepo;

    @GetMapping("/getAllPosts")
    public ResponseEntity<List<Post>> getAllPosts(){
        try{
            List<Post> postList = new ArrayList<>();
            postRepo.findAll().forEach(postList::add);

            postList.sort((a,b) -> b.getId().compareTo(a.getId()));

            if(postList.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
                return new ResponseEntity<>(postList, HttpStatus.OK);
        } catch (Exception  ex){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/getPostById/{id}")
    public ResponseEntity<Post> getPostById(@PathVariable Long id){
        Optional<Post> postData = postRepo.findById(id);

        if (postData.isPresent()){
            return new ResponseEntity<>(postData.get(), HttpStatus.OK);
        }
            
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/addPost")
    public ResponseEntity<Post> addPost(@RequestBody Post post){
        Post postObj = postRepo.save(post);

        return new ResponseEntity<>(postObj, HttpStatus.OK);
    }

    @PostMapping("/updatePostById/{id}")
    public ResponseEntity<Post> updatePostById(@PathVariable Long id, @RequestBody Post newPostData){
       Optional<Post> oldPostData = postRepo.findById(id);

       if(oldPostData.isPresent()){
            Post updatedPostData = oldPostData.get();
            updatedPostData.setTitle(newPostData.getTitle());
            updatedPostData.setContent(newPostData.getContent());

            Post postObj = postRepo.save(updatedPostData);
            return new ResponseEntity<>(postObj, HttpStatus.OK);
       } 
       return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/deletePostById/{id}")
    public ResponseEntity<HttpStatus> deletePostById(@PathVariable Long id){
        postRepo.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
