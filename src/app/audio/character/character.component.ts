import { Component, OnInit } from "@angular/core";

import { CharacterService } from "src/app/core/character.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-character-list",
  templateUrl: "./character-list.component.html",
  styleUrls: ["./character-list.component.scss"],
})
export class CharacterComponent implements OnInit {
  constructor(
    private characterService: CharacterService,
    private router: Router
  ) {}
  characters: any[];

  hash = {};
  pre = null;

  ngOnInit() {
    this.characterService.getCharacters().subscribe((characters) => {
      this.characters = characters;
    });
  }

  navigateToPlay(id) {
    this.router.navigateByUrl(`./play/${id}`, {
      state: this.characters[id],
    });
  }
}
