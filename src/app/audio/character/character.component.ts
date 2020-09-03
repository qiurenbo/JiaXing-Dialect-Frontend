import { Component, OnInit } from "@angular/core";

import { CharacterService } from "src/app/core/character.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-character",
  templateUrl: "./character.component.html",
  styleUrls: ["./character.component.scss"],
})
export class CharacterComponent implements OnInit {
  constructor(
    private characterService: CharacterService,
    private router: Router,
    private route: ActivatedRoute
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
    this.router.navigate([`./play/${id}`], {
      relativeTo: this.route,
    });
  }
}
