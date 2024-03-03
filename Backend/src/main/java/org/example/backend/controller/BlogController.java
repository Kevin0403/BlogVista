package org.example.backend.controller;

import org.example.backend.entities.Blog;
import org.example.backend.entities.User;
import org.example.backend.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/blog")
public class BlogController {

    @Autowired
    BlogService blogService;


    @PostMapping(value = "")
    public ResponseEntity addBlog(@RequestBody Blog blog){
        blog = blogService.addBlog(blog);
        return ResponseEntity.ok(blog);
    }

    @GetMapping(value = "")
    public ResponseEntity getAll(){
        return ResponseEntity.ok(blogService.getBlogs());
    }

    @GetMapping(value = "/{id}")
    public  ResponseEntity getBlogById(@PathVariable("id") String id){
        return ResponseEntity.ok(blogService.getBlogById(id));
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity UpdateBlog(@PathVariable("id") String id, @RequestBody Blog blog){
        return ResponseEntity.ok(blogService.updateBlog(blog, id));
    }

    @GetMapping(value = "/user")
    public ResponseEntity getBlogByUser(@RequestBody User user){
        return ResponseEntity.ok(blogService.getBlogsByUser(user));
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity deleteBlog(@PathVariable("id") String id){
        if(blogService.deleteBlog(id))
            return ResponseEntity.ok("Blog deleted successfully");
        else
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Can't deleted");
    }

}
