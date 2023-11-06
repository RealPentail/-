package myproject.board.web.board;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import myproject.board.domain.Board;
import myproject.board.service.BoardListService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/board")
@RequiredArgsConstructor
public class BoardController {

    private final BoardListService service;

    @GetMapping("/")
    public List<Board> board() {
        return service.findAll();
    }

    @GetMapping("/detail/{boardId}")
    public Board detail(@PathVariable long boardId) {
        return service.findById(boardId).get();
    }

    @GetMapping("/save")
    public void save() {}

    @PostMapping("/save")
    public Board save(@RequestBody Board board) {
        service.save(board);
        return board;
    }
}
