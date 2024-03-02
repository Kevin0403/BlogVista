package org.example.backend.entities;

import jakarta.persistence.*;

@Entity
public class Blog {
    @Id
    @GeneratedValue
    int id;

    @Column(name = "Title")
    String title;

    String content;

    String status;

    @ManyToOne
    @Column(name = "fk_user")
    User user;

}
