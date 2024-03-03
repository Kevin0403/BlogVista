package org.example.backend.service;


import org.example.backend.entities.Blog;
import org.example.backend.entities.User;
import org.example.backend.repository.BlogRepository;
import org.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;

@Component
@Service
public class BlogService {

    @Autowired
    BlogRepository blogRepository;

    @Autowired
    UserRepository userRepository;

    public Blog addBlog(Blog blog){
        blog.setUser(userRepository.findByEmail(blog.getUser().getEmail()));
        blogRepository.save(blog);
        return blog;
    }

    public List<Blog> getBlogs(){
        return blogRepository.findAll();
    }

    public List<Blog> getBlogsByUser(User user){
        return blogRepository.findByUser(user.getEmail());
    }

    public Blog getBlogById(String id){
        return blogRepository.findById(id);
    }

    public Blog updateBlog(Blog blog, String id){
        Blog update = blogRepository.findById(id);
        update.setTitle(blog.getTitle());
//        update.setId(blog.getId())x;
        update.setContent(blog.getContent());
        update.setStatus(blog.getStatus());
        blogRepository.save(update);


        return update;
    }

    public boolean deleteBlog(String id){
        blogRepository.delete(blogRepository.findById(id));
        return true;
    }

}
