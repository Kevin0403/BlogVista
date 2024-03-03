package org.example.backend.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Blog {
    @Id
    String id;

    @Column(name = "Title")
    String title;

    @Column(name = "Content", length = Integer.MAX_VALUE)
    String content;

    String status;

    @ManyToOne
    @JoinColumn(name = "fk_user")
    User user;

}
