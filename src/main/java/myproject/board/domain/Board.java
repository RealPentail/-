package myproject.board.domain;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Date;

@Getter
@Setter
@EqualsAndHashCode
public class Board {

    Long id;
    String title;
    String content;
    LocalDate date;
    long count;
    String username;

    public Board() {}

    public Board(String title, String content, LocalDate date, long count, String username) {
        this.title = title;
        this.content = content;
        this.date = date;
        this.count = count;
        this.username = username;
    }
}
